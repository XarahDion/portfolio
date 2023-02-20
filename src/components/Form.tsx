import styled from "styled-components";

const Form = () => {
    return (
        <FormDiv>
            <input type="text" name="Name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="Message" placeholder="Your Message"></textarea>
            <button type="submit">Submit</button>
        </FormDiv>
    );
};

const FormDiv = styled.form`
    width: 100%;
    textarea {
        resize: none;
    }
    input,
    textarea {
        letter-spacing: 1px;
        width: 100%;
        border: 0;
        outline: none;
        background: #2b2232;
        padding: 3%;
        margin: 2% 0;
        color: var(--font-color);
        font-size: 14px;
        border-radius: 5px;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
`;
export default Form;
