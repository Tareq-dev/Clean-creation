import React from "react";
import "./LandingPage.css";
import Plan from "../Plan/Plan";

const Landingpage = () => {
  const plans = [
    { id: "1", name: "The Lifestyle Plan", content: "as low as", price: 11.19 },
    { id: "2", name: "The Low Carb Plan", content: "as low as", price: 11.19 },
    {
      id: "3",
      name: "The Pescatarian Plan",
      content: "as low as",
      price: 11.19,
    },
    { id: "4", name: "The Vegan Plan", content: "as low as", price: 11.19 },
    {
      id: "5",
      name: "The Vegetarian Plan",
      content: "as low as",
      price: 11.19,
    },
  ];
  return (
    <div>
      <section className="container mt-5">
        <div>
          <h1 className="text-center">Plans for Everyone</h1>
          <p className="text-center">
            <small>
              Consistency in your diet starts with a plan. Choose from 2,3, or 4
              meals per day for 5,6, or 7 days. Plans are subscription based but
              can be changed at any time to meet your needs.
            </small>
          </p>
        </div>
        <div className="row d-flex justify-content-center m-2">
          {plans.map((plan) => (
            <Plan key={plan.id} plan={plan} />
          ))}
        </div>
      </section>
      <section className="mt-5">
        <div className="woman">
          <div className="p-3 content shadow bg-light mt-2">
            <h4>
              Our mission is to make clean eating delicious and convenient for
              everyone.
            </h4>
            <p>
              <small>
                Our mission is to make clean eating simple and convenient. You
                should never have to sacrifice quality, flavor or nutrition when
                it comes to your, which is why we offer the highest quality
                ingredients in our meals. Every meal we prepare is created with
                passion and care by our incredible chef and culinary team. We
                are more passionate than ever that we can truly change people’s
                lives with clean eating!
              </small>
            </p>
            <button className="learn">Learn More</button>
          </div>
          </div>
      </section>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Landingpage;
