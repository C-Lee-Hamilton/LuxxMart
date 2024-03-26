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
function createSellerCard() {
  return (
    <div className="w-full flex flex-col items-center ">
      <Card className="w-2/5 ">
        <CardHeader>
          <CardTitle>Create Business Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <Input className="w-full" placeholder="Business Name" />
              <Input className="w-full" placeholder="Email" />
              <Button variant="secondary">Upload Store Photo</Button>
              <Input className="w-full" placeholder="business ID" />
              <Input className="w-full" placeholder="tax ID" />
              <Input className="w-full" placeholder="Password" />

              <Input className="w-full" placeholder="Re-enter Password" />
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

export default createSellerCard;
