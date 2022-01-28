import ReactMarkdown from 'react-markdown';

const Content = ({ content }) => {
  if (!content) {
    return null;
  }

  const {
    heading = null,
    subheading = null,
    text: { text },
  } = content;

  return (
    <>
      <h3 className="font-display tracking-wider font-bold leading-tight">{ heading }</h3>
      <h4 className="text-lg md:text-xl">{ subheading }</h4>
      <ReactMarkdown className="markdown">{ text }</ReactMarkdown>
    </>
  )
}

export default Content;