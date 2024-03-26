import React from "react";
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

function CreateCard() {
  return (
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
                  className="w-full"
                  placeholder="Username or Email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input className="w-full" id="name" placeholder="Password" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  className="w-full"
                  id="name"
                  placeholder="Re-enter Password"
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
          <Button>Create Account</Button>
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
