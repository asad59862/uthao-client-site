import React from "react";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <section className="bg-base-200 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            About <span className="text-secondary">Uthao</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Uthao is a modern ride-sharing and delivery platform designed to
            connect people with fast, reliable, and affordable transportation
            and parcel services across Bangladesh. Inspired by simplicity,
            powered by technology.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
            <div className="card-body">
              <h3 className="card-title text-primary">🚖 Easy Rides</h3>
              <p className="text-base-content/80">
                Book rides instantly and travel safely with trusted drivers at
                your fingertips.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
            <div className="card-body">
              <h3 className="card-title text-primary">📦 Fast Delivery</h3>
              <p className="text-base-content/80">
                Send and receive parcels quickly with our reliable courier
                partners.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
            <div className="card-body">
              <h3 className="card-title text-primary">💡 Smart Platform</h3>
              <p className="text-base-content/80">
                Enjoy a seamless experience with real-time tracking, secure
                payments, and 24/7 support.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to={'/'} className="btn btn-primary text-black">
             Home
          </Link>
   
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
