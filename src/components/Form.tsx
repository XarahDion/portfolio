import styled from "styled-components";

const Form = () => {
    return (
        <FormDiv>
            <Input type="text" name="Name" placeholder="Your Name" required />
            <Input type="email" name="email" placeholder="Your Email" required />
            <textarea name="Message" placeholder="Your Message"></textarea>
            <button type="submit">Submit</button>
        </FormDiv>
    );
};

const Input = styled.input`
    
`
const FormDiv = styled.form``;
export default Form;
