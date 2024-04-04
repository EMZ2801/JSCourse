import { FC, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "../style/style.css";
import { useNavigate } from "react-router-dom";
import clickerPhoto from "../../src/assets/icon/загрузка.png";
import openEye from "../../src/assets/icon/открытый глаз.png";
import closeEye from "../../src/assets/icon/закрытый глаз.png";
import { generateId } from "../helpers/generateId";
import { validationInputLogin, validationInputPassword } from "../helpers/validationOptions";

interface SignUpFormData {
  login: string;
  password: string;
  returnPassword: string;
}

export const Registr: FC = () => {
  const navigator = useNavigate();
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const filePicker = useRef<HTMLInputElement>(null);
  const [typePassword, setTypePassword] = useState("password");
  const [typeReturnPassword, setTypeReturnPassword] = useState("password");

  const {
    handleSubmit,
    register,
    formState: { isValid, errors }, 
    setError,
  } = useForm<SignUpFormData>({
    mode: "onBlur",
  });

  const onSubmit = (data: SignUpFormData) => {
    const newToken = generateId();

    if (data.password !== data.returnPassword) {
      setError("returnPassword", {
        type: "manual",
        message: "Пароли не совпадают",
      });
    }
    if (newToken) {
      localStorage.setItem("token", newToken);
      navigator("/");
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageUrl(imageURL);
    }
  };

  const handlePick = () => {
    if (filePicker.current !== null) {
      filePicker.current.click();
    }
  };

  const getBackground = () => {
    if (imageUrl) {
      return { backgroundImage: `url(${imageUrl})` };
    } else {
      return { backgroundColor: "#ccc" };
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1> Sign Up </h1>
        <div
          className="container_avatar"
          onClick={handlePick}
          style={getBackground()}
        >
          <img src={clickerPhoto} className="clickerPhoto" alt={"icon"} />
        </div>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="login" className="login_label" > Login </label>
          <input
            type="text"
            className="input"
            placeholder="login"
            id="login"
            {...register("login", validationInputLogin)}
          />

          <div>{errors?.login && <div>{errors?.login?.message}</div>}</div>


          <label htmlFor="password" className="label_password" > Password </label>
  <div className="password_box">
          <input
            className="input"
            placeholder="password"
            id="password"
            type={typePassword}
            {...register("password", validationInputPassword)}
          />

          {typePassword === "password" ? (
            <div onClick={() => setTypePassword("text")}>
              <img className="photo" src={closeEye} alt={"closeEye"} />
            </div>
          ) : (
            <div onClick={() => setTypePassword("password")}>
              <img className="photo" src={openEye} alt={"openEye"} />
            </div>
          )}


</div>
          <div>
            {errors?.password && <div>{errors?.password?.message}</div>}
          </div>

       

          <label htmlFor="repeatpassword" className="label_repeatpassword"> Repeat password </label>
  <div className="repeatpassword_box">
          <input
            className="input"
            placeholder="repeat password"
            id="repeatpassword"
            type={typeReturnPassword}
            {...register("returnPassword", { required: "required" })}
          />

          {typeReturnPassword === "password" ? (
            <div onClick={() => setTypeReturnPassword("text")}>
              <img className="photo" src={closeEye} alt={"closeEye"} />
            </div>
          ) : (
            <div onClick={() => setTypeReturnPassword("password")}>
              <img className="photo" src={openEye} alt={"openEye"} />
            </div>
          )}

</div>
          <div>
            {errors?.returnPassword && (
              <div>{errors?.returnPassword?.message}</div>
            )}
          </div>
 
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={!isValid || !imageUrl}
            className="button_submit"
          >
            Submit{" "}
          </button>

          <input
            type="file"
            placeholder="file"
            className="fileInput"
            ref={filePicker}
            onInputCapture={handleFileChange}
          />
        </form>
      </div>
    </div>
  );
};
