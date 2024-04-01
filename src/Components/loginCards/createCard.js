import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { createUserWithEmailAndPassword } from "firebase/auth";

function CreateCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  return success ? (
    <Navigate to="/login" />
  ) : (
    <div className="w-full flex flex-col items-center ">
      <Card className="w-2/5 ">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="name"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  className="w-full"
                  id="name"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
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
          <Button onClick={createAccount}>Create Account</Button>
        </CardFooter>
      </Card>
      <Link
        to="/login"
        className=" h-10 px-4 py-2 bg-white mt-10 rounded-sm text-black hover:bg-offwhite "
      >
        {" "}
        Go Back
      </Link>
    </div>
  );
}
export default CreateCard;
