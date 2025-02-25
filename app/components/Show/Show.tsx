import React, { ReactNode } from 'react';

interface ShowProps {
  children: ReactNode;
}

interface WhenProps {
  isTrue: boolean;
  children: ReactNode;
}

interface ElseProps {
  children: ReactNode;
}

const Show: React.FC<ShowProps> & {
  When: React.FC<WhenProps>;
  Else: React.FC<ElseProps>;
} = ({ children }) => {
  let when: ReactNode = null;
  let otherwise: ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement<WhenProps>(child) && child.props.isTrue) {
      when = child;
    } else if (!when) {
      otherwise = child;
    }
  });

  return when || otherwise || null;
};

Show.When = ({ isTrue, children }: WhenProps) => (isTrue ? children : null);
Show.Else = ({ children }: ElseProps) => children;

export default Show;
