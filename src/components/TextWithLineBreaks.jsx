import React from 'react';

function TextWithLineBreaks(props) {
  const textWithBreaks = props.text.toString().split('\n').map((text, index) => (
    <p className="break-words text-justify	 rounded-md font-sans text-[28px] col-span-8 row-span-8 col-start-2 border-4 p-3  row-start-2" key={index}>
      {text}
      <br />
    </p>
  ));

  return <div>{textWithBreaks}</div>;
}

export default TextWithLineBreaks;