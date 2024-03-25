import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Input } from "./input";
import { Label } from "./label";

function CreateCard() {
  return (
    <Card className="w-2/5">
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
              <Link className="text-blue-500">
                {" "}
                Conditions of Use and Privacy Notice.
              </Link>
            </h1>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Create Account</Button>
      </CardFooter>
    </Card>
  );
}
export default CreateCard;
