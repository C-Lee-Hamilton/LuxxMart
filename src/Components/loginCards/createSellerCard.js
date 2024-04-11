import React, { useState } from "react";
import { auth, db } from "../../config/firebase";
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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
function CreateSellerCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busName, setBusName] = useState("");
  const [taxId, setTaxId] = useState("");
  const [busId, setBusId] = useState("");
  const [success, setSuccess] = useState(false);

  const createAccount = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: busName });
      await setDoc(doc(db, "Business Users", userCredential.user.uid), {
        businessId: busId,
        email: email,
        taxId: taxId,
        businessName: busName,
        addresses: [],
        seller: true,
      });

      setSuccess(true);
      setEmail("");
      setPassword("");
      setBusId("");
      setBusName("");
      setTaxId("");
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
          <CardTitle>Create Business Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <Input
                onChange={(e) => setBusName(e.target.value)}
                className="w-full"
                placeholder="Business Name"
              />
              <Input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                placeholder="Email"
              />
              <Input
                onChange={(e) => setBusId(e.target.value)}
                className="w-full"
                placeholder="business ID"
              />
              <Input
                onChange={(e) => setTaxId(e.target.value)}
                className="w-full"
                placeholder="tax ID"
              />
              <Input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                placeholder="Password"
              />
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

export default CreateSellerCard;
