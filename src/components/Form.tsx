import styled from "styled-components";

const Form = () => {
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxCYUINWDjsdhfNIa_ROqRl5Hx1iGncVQ8Mn6Gli0WzO7RSVLbSk-Mm-2U1D8O2YzOA-A/exec";
    const form = document.forms["submit-to-google-sheet" as any];

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const msg: HTMLElement | null = document.getElementById("msg");
        e.preventDefault();
        if (!form) {
            console.log("error: form not found");
        } else
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
                .then(() => {
                    if (msg) {
                        msg.innerHTML = "Message sent successfully.";
                        setTimeout(() => {
                            msg.innerHTML = "";
                            form.reset();
                        }, 5000);
                    }
                })
                .catch((error) => console.error("Error!", error.message));
    };

    return (
        <FormDiv name="submit-to-google-sheet">
            <input type="text" name="Name" placeholder="Your Name" required />
            <input type="email" name="Email" placeholder="Your Email" required />
            <textarea name="Message" placeholder="Your Message"></textarea>
            <button type="submit" onClick={handleClick}>
                Submit
            </button>
            <span id="msg"></span>
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
    span {
        margin-left: 20px;
    }
`;
export default Form;
