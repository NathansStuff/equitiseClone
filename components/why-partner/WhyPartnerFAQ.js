import { whyPartnerFAQContent } from './whypartnerfaqcontent';
import Accordion from 'components/Accordian';
export default function WhyPartnerFAQ() {
  return (
    <div className='raise-process-container '>
      <div className='why-partner-container'>
        <div className='why-partner-faq'>
          <div className='raise-process-header'>
            <h4>NOT SURE?</h4>
            <h3>FREQUENTLY ASKED QUESTIONS</h3>
            <p>
              The results speak for themselves….we have delivered an 86% success
              rate
            </p>
          </div>
        </div>

        <div className='accordion'>
          {whyPartnerFAQContent.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
}
