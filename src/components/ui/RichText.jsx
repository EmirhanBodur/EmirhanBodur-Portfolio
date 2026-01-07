import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const RichText = ({ content, options }) => {
  if (!content) return null;
  return (
    <div className="rich-text-content">
      {documentToReactComponents(content, options)}
    </div>
  );
};

export default RichText;
