// Vanilla React:
import React, { Component } from 'react';

// Bootstrap-React components:
// none

// Smaller components:
// none

// Call stylesheet last:
import './Terms.css';


class Terms extends Component {
    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    render() {
        return (
            <section className='borderBox'>
                <h1>Medical Information Disclaimer</h1>
                <p>1.1	Our website contains general medical information.</p>
                <p>1.2	The medical information is not advice and should not be treated as such.</p>
                <p>2.	No warranties</p>
                <p>2.1	The medical information on our website is provided without any representations or warranties, express or implied.</p>
                <p>2.2	Without limiting the scope of Section 3.1, we do not warrant or represent that the medical information on this website:</p>
                <p>(a)	will be constantly available, or available at all; or</p>
                <p>(b)	is true, accurate, complete, current or non-misleading.</p>
                <p>3.	Medical assistance</p>
                <p>3.1	You must not rely on the information on our website as an alternative to medical advice from your doctor or other professional healthcare provider.</p>
                <p>3.2	If you have any specific questions about any medical matter, you should consult your doctor or other professional healthcare provider.</p>
                <p>3.3	If you think you may be suffering from any medical condition, you should seek immediate medical attention.</p>
                <p>3.4	You should never delay seeking medical advice, disregard medical advice or discontinue medical treatment because of information on our website.</p>
                <p>4.	Interactive features</p>
                <p>4.1	Our website includes interactive features that allow users to communicate with us.</p>
                <p>4.2	You acknowledge that, because of the limited nature of communication through our website's interactive features, any assistance you may receive using any such features is likely to be incomplete and may even be misleading.</p>
                <p>4.3	Any assistance you may receive using any our website's interactive features does not constitute specific advice and accordingly should not be relied upon without further independent confirmation.</p>
                <p>5.	Limits upon exclusions of liability</p>
                <p>5.1	Nothing in this disclaimer will:</p>
                <p>(a)	limit or exclude any liability for death or personal injury resulting from negligence;</p>
                <p>(b)	limit or exclude any liability for fraud or fraudulent misrepresentation;</p>
                <p>(c)	limit any liabilities in any way that is not permitted under applicable law; or</p>
                <p>(d)	exclude any liabilities that may not be excluded under applicable law.</p>
            </section>
        );
    }
}

export default Terms;
