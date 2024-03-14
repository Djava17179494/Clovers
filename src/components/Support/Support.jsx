import SupportItem from "./SupportItem";
const Support = () => {
  let questions = [
    {
      title: "What is an FAQ section?",
      desc: 'An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".',
    },
    {
      title: "Why do FAQs matter?",
      desc: 'FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.',
    },
    {
      title: "Where can I add my FAQs?",
      desc: 'FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.',
    },
  ];
  return (
    <>
    {questions.map((ques, index)=>{
        return  <SupportItem num={index + 1} title={ques.title} desc={ques.desc} />
    })}
    </>
  );
};

export default Support;
