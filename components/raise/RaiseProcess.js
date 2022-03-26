import FadeInSection from 'components/FadeInSection';
import { raiseProcessContent } from './raiseProcessContent';
import FadeIn from 'components/FadeIn';

export default function RaiseProcess() {
  return (
    <div className='raise-process-container'>
      <div>
        <div className='raise-process-header'>
          <h4>THE CAPITAL RAISE PROCESS</h4>
          <h2>
            Our approach is a partnership for success, not a “self service”
            model
          </h2>
          <p>
            The results speak for themselves….we have delivered an 86% success
            rate
          </p>
        </div>
        <FadeInSection className='fade-in-section'>
          <div className='raise-process-steps-container'>
            <div className='raise-process-steps'>
              <h2>
                <img
                  src='https://equitise.com/static/df4c4c257d1585db7bf188cd3348d4b8/d689f/419d3fed-0cf4-450b-a11e-8ce5017709ef_clipboard.webp'
                  className='img-header'
                />
                1. Offer preparation
              </h2>
              <p>
                Work with our fundraising team to prepare your company for a
                capital raise. This includes advice on financial forecasts and
                valuation, legal documents and pitch decks. They will also help
                you write the offer document, which is the main information pack
                for your potential investors.
              </p>
            </div>
            <div className='raise-process-steps'>
              <h2>
                <img
                  src='https://equitise.com/static/fe6c3c459d9fca0e53e2165a911e7656/d689f/cd3c87cb-a615-4800-86ec-0376b4ed0ccc_like.webp'
                  className='img-header'
                />
                2. Expression of interest (EOI)
              </h2>
              <p>
                Validate the investor demand for your capital raise before doing
                the heavy lifting. An EOI marketing campaign is fast and simple
                and has minimal costs to get started.
              </p>
            </div>
            <div className='raise-process-steps'>
              <h2>
                <img
                  src='https://equitise.com/static/7dc9e092a99cbe8c884161e3a527cc33/d689f/246aaffd-4960-42f7-bd10-141357ca3c06_padlock.webp'
                  className='img-header'
                />
                3. Private launch
              </h2>
              <p>
                The offer is open to an exclusive group which might include your
                previous investors, close network and top customers. Once the
                raise has some momentum, we then give access to EOIs (which can
                range in number from 500 to 2,000+).
              </p>
            </div>
            <div className='raise-process-steps'>
              <h2>
                <img
                  src='https://equitise.com/static/4f83295e23741d6e1f3aa9ea0176e0b7/d689f/bfc410a4-0cf7-4156-b7aa-f8775a68ba24_rocket%2B%25281%2529.webp'
                  className='img-header'
                />
                4. Public launch
              </h2>
              <p>
                It’s go time! The offer is open to everyone and as much traffic
                as possible should be driven to the offer page through
                marketing. The total campaign runs for approximately 6 weeks but
                we have closed the most demand raises in days.
              </p>
            </div>
            <div className='raise-process-steps'>
              <h2>
                <img
                  src='https://equitise.com/static/cfc7bb62416572ae6d6a690d3e8466a5/d689f/c6d726e1-3f97-4134-b8df-b24d5c7a458e_complete.webp'
                  className='img-header'
                />
                5. Campaign ends
              </h2>
              <p>
                Once you hit the minimum funding target (100% funded), the offer
                is regarded as successful and the raise will then go into
                ‘overfunding’. The offer ends when you hit the maximum funding
                target or the timer finishes.
              </p>
            </div>
            <div className='raise-process-steps'>
              <h2>
                <img
                  src='https://equitise.com/static/390c16373a5378e34c39bb9714038ac6/d689f/c0ab2996-e303-48d3-ae20-2773e01f77b6_funding.webp'
                  className='img-header'
                />
                6. Receive funds
              </h2>
              <p>
                After the capital raise closes, we settle the funds and work
                with your share registry service to update your capital table.
                Once the shares are issued, we then transfer you the total funds
                (net of our fees). We can give you advice and support on matters
                such as reporting obligations and future rounds. It is then over
                to you to welcome your new shareholders!
              </p>
            </div>{' '}
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
