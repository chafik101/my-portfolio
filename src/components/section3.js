
import './css-file/section3.css'
import { useForm, ValidationError } from '@formspree/react';
import img_msg from './imges/message.png'
function Section3(){
   
        const [state, handleSubmit] = useForm("mrgnzezo");
        if (state.succeeded) {
            return <section>
                 <div className='container-section3'>
                    <h1 className='msg_send change-txt'>Thanks for joining!</h1>
                </div>
                    </section>
        }


    return(
        <section>
            <div className='container-section3 clair' id='container-section3'>
                <div className='container_form'>
                    <h1 className='title-section3 change-txt'>Contact us</h1>
                    <p className='para-section3 change-txt'>Contact me for more information</p>
                    <form onSubmit={handleSubmit}>
                        <label className='label_input1 change-txt'>Email address :</label>
                        <input type='text' name='email' className='input_email change-txt change-bg-color' />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                        <label className='label_input2 change-txt '>Your message :</label>
                        <textarea className='input_area change-bg-color change-txt' name='message '></textarea>
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                        <button type='submit' className='btn_form change-txt change-bg-color' disabled={state.submitting}>submit</button>
                    </form>
                </div>

                <div className='img_section3' id='img_section3'>
                <img src={img_msg} />
            </div>
            </div>
            
        </section>
    )
}


export default Section3