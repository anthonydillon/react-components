import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import CodeSnippetBlock from "./CodeSnippetBlock";
import type { CodeSnippetBlockProps } from "./CodeSnippetBlock";

export type Props = {
  className?: string;
  blocks: CodeSnippetBlockProps[];
};

export default function CodeSnippet({ className, blocks }: Props): JSX.Element {
  return (
    <div
      className={classNames(
        "p-code-snippet",
        { "is-bordered": blocks.some((block) => block.content) },
        className
      )}
    >
      {blocks.map((props, i) => (
        <CodeSnippetBlock
          key={`code-snippet-block-${i}`}
          {...props}
        ></CodeSnippetBlock>
      ))}
    </div>
  );
}

CodeSnippet.propTypes = {
  blocks: PropTypes.array.isRequired,
  className: PropTypes.string,
};
