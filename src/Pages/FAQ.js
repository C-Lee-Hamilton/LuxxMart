import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Components/ui/accordion";
function FAQ() {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="w-3/4 mx-auto mt-2 text-greyblue p-4"
      >
        <h1 className="text-center text-xl mb-4">Frequently Asked Questions</h1>
        <AccordionItem
          value="item-1"
          className="border-solid border-b-2 border-greyblue"
        >
          <AccordionTrigger>
            What types of products does Luxxmart offer?
          </AccordionTrigger>
          <AccordionContent>
            Luxxmart offers a curated selection of luxury goods, including
            high-end clothing, fine jewelry, exquisite gems, and precious
            metals. Our collections feature exclusive designs crafted by
            renowned artisans from around the world.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border-solid border-b-2 border-greyblue"
        >
          <AccordionTrigger>
            How can I be sure of the authenticity of the products sold on
            Luxxmart?
          </AccordionTrigger>
          <AccordionContent>
            We understand the importance of authenticity when it comes to luxury
            goods. Rest assured, all products sold on Luxxmart are sourced
            directly from reputable designers, brands, and manufacturers.
            Additionally, each item undergoes rigorous quality control checks to
            ensure authenticity and craftsmanship.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border-solid border-b-2 border-greyblue"
        >
          <AccordionTrigger>
            Does Luxxmart offer international shipping?
          </AccordionTrigger>
          <AccordionContent>
            Yes, Luxxmart offers international shipping but only to Canada.
            Simply select your desired shipping destination during the checkout
            process, and our team will ensure your order is delivered promptly
            and securely.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="border-solid border-b-2 border-greyblue"
        >
          <AccordionTrigger>
            What payment methods are accepted on Luxxmart?
          </AccordionTrigger>
          <AccordionContent>
            Luxxmart accepts a variety of payment methods for your convenience,
            including major credit cards (Visa, Mastercard, American Express),
            PayPal, and bank transfers. All transactions are processed securely
            to safeguard your financial information.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="border-solid border-b-2 border-greyblue"
        >
          <AccordionTrigger>
            {" "}
            Can I return or exchange items purchased from Luxxmart?
          </AccordionTrigger>
          <AccordionContent>
            Yes, Luxxmart offers a hassle-free return and exchange policy. If
            you are not completely satisfied with your purchase, you may return
            the item(s) within 30 days of receipt for a full refund or exchange.
            Please refer to our Returns & Exchanges policy for detailed
            instructions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-6"
          className="border-solid border-b-2 border-greyblue"
        >
          <AccordionTrigger>
            How can I track my order on Luxxmart?
          </AccordionTrigger>
          <AccordionContent>
            Once your order has been processed and shipped, you will receive a
            shipping confirmation email containing a tracking number. You can
            use this tracking number to monitor the status of your delivery
            through our website or the courier's tracking portal.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-7"
          className="border-solid border-b-2 border-greyblue"
        >
          <AccordionTrigger>
            Does Luxxmart offer gift wrapping services?
          </AccordionTrigger>
          <AccordionContent>
            Yes, Luxxmart offers complimentary gift wrapping services for all
            purchases. Simply select the gift wrapping option during checkout,
            and our team will ensure your order is beautifully packaged and
            ready for gifting.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-8"
          className="border-solid border-b-2 border-greyblue"
        >
          <AccordionTrigger>
            Are the prices on Luxxmart inclusive of taxes and duties?
          </AccordionTrigger>
          <AccordionContent>
            Prices displayed on Luxxmart are exclusive of taxes and duties.
            However, for international orders, import duties and taxes may apply
            depending on your country's regulations. These additional charges
            are the responsibility of the buyer and are not included in the
            purchase price.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-9"
          className="border-solid border-b-2 border-greyblue"
        >
          <AccordionTrigger>
            How can I contact Luxxmart's customer service team?
          </AccordionTrigger>
          <AccordionContent>
            Luxxmart's customer service team is available to assist you with any
            inquiries or concerns you may have. You can reach us via email at
            support@luxxmart.com or through our Contact Us page on the website.
            We strive to respond to all inquiries promptly and provide
            exceptional customer service.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-10"
          className="border-solid border-b-2 border-greyblue"
        >
          <AccordionTrigger>
            Does Luxxmart offer customization or personalization services for
            products?
          </AccordionTrigger>
          <AccordionContent>
            Yes, Luxxmart offers customization and personalization services for
            select products, including engraved jewelry and bespoke clothing. If
            you have specific customization requests, please contact our
            customer service team, and we will work with you to create a
            one-of-a-kind piece tailored to your preferences.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FAQ;
