import { auth, googleProvider, db } from "../../config/firebase";
import React, { useState } from "react";
import { usePageContext } from "../../Context/PageContext.js";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import googleButton from "../../Media/googleSignIn.png";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setIsLoggedIn, isLoggedIn, setIsBusAcct } = usePageContext();
  const signIn = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      window.localStorage.setItem("uid", JSON.stringify(result.user.uid));
      window.localStorage.setItem(
        "stored-name",
        JSON.stringify(result.user.displayName)
      );
      window.localStorage.setItem("logged-in", JSON.stringify("true"));

      const bq = query(
        collection(db, "Business Users"),
        where("email", "==", email)
      );

      const bquerySnapshot = await getDocs(bq);

      const filteredBusData = bquerySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));

      filteredBusData.length > 0 ? setIsBusAcct(true) : setIsBusAcct(false);
      filteredBusData.length > 0
        ? window.localStorage.setItem("is-bus", JSON.stringify("true"))
        : window.localStorage.setItem("is-bus", JSON.stringify("false"));

      setIsLoggedIn(true);
      setEmail("");
      setPassword("");
      console.log(result.user);
    } catch (err) {
      console.log("failure");
    }
  };
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      user ? setIsLoggedIn(true) : setIsLoggedIn(false);

      window.localStorage.setItem(
        "stored-name",
        JSON.stringify(result.user.displayName)
      );
      window.localStorage.setItem("is-bus", JSON.stringify("false"));
      setIsBusAcct(false);
      await setDoc(doc(db, "Users", result.user.uid), {
        username: result.user.displayName,
        email: result.user.email,
        cart: [],
        addresses: [],
        seller: false,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return isLoggedIn ? (
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
                  type="password"
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
