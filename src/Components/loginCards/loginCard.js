import { auth, googleProvider } from "../../config/firebase";
import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import googleButton from "../../Media/googleSignIn.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("success");
      setSuccess(true);
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log("failure");
    }
  };
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      if (user) {
        // User successfully signed in, you can now navigate or perform other actions
        console.log("User successfully signed in:", user);
        setSuccess(true);
      } else {
        console.log("failed to login");
      }
      console.log("User successfully signed in:", user);
      // await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };
  return success ? (
    <Navigate to="/" />
  ) : (
    <div className="w-full flex flex-col items-center">
      <Card className="w-2/5">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  id="name"
                  className="w-full"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                  id="name"
                  placeholder="Password"
                />
              </div>
              <h1 className="text-xs">
                By continuing, you agree to LuxxMart's
                <Link
                  to="/termsOfService"
                  target="_blank"
                  className="text-blue-500"
                >
                  {" "}
                  Conditions of Use and Privacy Notice.
                </Link>
              </h1>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={signIn}>Continue</Button>
        </CardFooter>
      </Card>

      <div className="w-2/5  justify-center items-center flex flex-row">
        <div className="w-1/3 mr-1 text-red mt-10 border border-solid border-offwhite"></div>
        <h1 className="text-offwhite text-center text-xs mt-10 w-1/3">
          New To LuxxMart?
        </h1>
        <div className="w-1/3 ml-1 text-red mt-10 border border-solid border-offwhite"></div>
      </div>

      <Link
        to="/login/createcard"
        className="w-2/5 bg-white mt-10 rounded-lg text-center text-sm p-3"
      >
        Create Your Luxx Account
      </Link>

      <Link
        to="/login/createsellercard"
        className="w-2/5 bg-white mt-2 rounded-lg text-center text-sm p-3"
      >
        Create Your Luxx Business Account
      </Link>
      <button
        onClick={signInWithGoogle}
        className="  bg-black mt-2 rounded-lg "
      >
        <img className=" w-1/4 mx-auto h-full" src={googleButton} alt="" />
      </button>
    </div>
  );
}
export default LoginCard;
