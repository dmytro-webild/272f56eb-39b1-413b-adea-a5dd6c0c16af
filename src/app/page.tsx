"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="fluid"
        cardStyle="glass-depth"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Gallery",
          id: "#gallery",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Book Now",
          id: "#booking",
        },
      ]}
      brandName="Apex Grooming Co."
      button={{
        text: "Book Now",
        href: "#booking",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "plain",
      }}
      title="Precision Cuts. Modern Style. Premium Experience."
      description="Elevate your look with unparalleled craftsmanship and an atmosphere of refined sophistication. Discover the art of grooming that defines true distinction."
      tag="Master Barbers"
      buttons={[
        {
          text: "Book Your Appointment",
          href: "#booking",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-cutting-man-s-hair-barber-shop_23-2149186474.jpg",
          imageAlt: "Luxurious barber shop interior with chairs and modern decor",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-towel-mirror_23-2147638129.jpg",
          imageAlt: "Barber giving a precision haircut to a client",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/mid-section-barber-wiping-clients-face-with-hot-towel_107420-94798.jpg",
          imageAlt: "Barber performing a traditional hot towel shave",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-getting-haircut_23-2149220553.jpg",
          imageAlt: "Elegant barber shop interior with sleek chairs",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-grooming-their-client_23-2149205870.jpg",
          imageAlt: "Barber styling a client's hair with product",
        },
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Over 500+ satisfied clients"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "The Art of Refined Grooming",
        },
      ]}
      buttons={[
        {
          text: "Learn More",
          href: "#services",
        },
      ]}
      description="At Apex Grooming Co., we believe a haircut is more than just a service—it's an experience. Our master barbers are passionate artisans, dedicated to precision, tradition, and contemporary style. We meticulously craft each look, paying unparalleled attention to every detail, ensuring you leave feeling confident and looking your absolute best. Step into our world where classic techniques meet modern elegance."
      imageSrc="http://img.b2bpic.net/free-photo/young-confident-blonde-male-barber-uniform-holds-comb-hair-clipper-isolated-violet-space-with-copy-space_141793-60252.jpg"
      imageAlt="Barber focusing on client's haircut"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      carouselMode="buttons"
      features={[
        {
          title: "Precision Haircuts",
          description: "Expertly crafted haircuts tailored to your unique style and preference, ensuring a sharp, modern look.",
          imageSrc: "http://img.b2bpic.net/free-photo/hairstylist-giving-haircut-client_23-2148506370.jpg",
          imageAlt: "Man getting a precision haircut",
        },
        {
          title: "Masterful Beard Trims",
          description: "Perfectly shaped and sculpted beard trims, designed to enhance your facial features and maintain impeccable style.",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-man-shaving-with-trimmer-white-backdrop_23-2148213364.jpg",
          imageAlt: "Barber trimming a man's beard",
        },
        {
          title: "Traditional Hot Towel Shaves",
          description: "Indulge in the ultimate relaxation with our classic hot towel shave, leaving your skin smooth and refreshed.",
          imageSrc: "http://img.b2bpic.net/free-photo/master-hairdresser-prepares-face-shaving-smears-face-with-foam-hairdressing-salon_613910-18406.jpg",
          imageAlt: "Man enjoying a hot towel shave",
        },
        {
          title: "Professional Hair Styling",
          description: "From sophisticated to trendy, our barbers provide expert hair styling to perfect your look for any occasion.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-getting-haircut_23-2150665403.jpg",
          imageAlt: "Barber styling a man's hair",
        },
        {
          title: "Luxury Grooming Packages",
          description: "Discover our exclusive packages, combining multiple services for a complete and indulgent grooming experience.",
          imageSrc: "http://img.b2bpic.net/free-photo/composition-shaving-objects-with-copyspace_23-2148122058.jpg",
          imageAlt: "Luxury grooming products",
        },
        {
          title: "Experienced & Skilled Barbers",
          description: "Our team comprises highly trained and passionate barbers, masters of their craft with years of experience.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-barber-s-shop-getting-his-beard-trimmed_23-2149186495.jpg",
          imageAlt: "Experienced barber at work",
        },
        {
          title: "Premium Tools & Products",
          description: "We utilize only the finest tools and luxury grooming products for superior results and client comfort.",
          imageSrc: "http://img.b2bpic.net/free-photo/cosmetic-male-beauty-products-with-display_23-2150435194.jpg",
          imageAlt: "Premium barber tools",
        },
        {
          title: "Impeccably Clean Environment",
          description: "Our salon maintains the highest standards of hygiene and cleanliness, ensuring a safe and pristine atmosphere.",
          imageSrc: "http://img.b2bpic.net/free-photo/various-trimmers-dressing-table_107420-94767.jpg",
          imageAlt: "Clean barber shop interior",
        },
        {
          title: "Effortless Online Booking",
          description: "Conveniently schedule your appointments through our user-friendly online booking system, anytime, anywhere.",
          imageSrc: "http://img.b2bpic.net/free-photo/washing-pet-dog-home_23-2149627218.jpg",
          imageAlt: "Online booking interface",
        },
        {
          title: "Outstanding Customer Reviews",
          description: "Our commitment to excellence is reflected in the glowing testimonials and high ratings from our satisfied clientele.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-shaving-his-beard-with-razor_23-2147839813.jpg",
          imageAlt: "Customer review stars",
        },
      ]}
      title="Our Premium Offerings & Distinct Advantages"
      description="Experience a blend of classic barbering and modern techniques, delivered with unparalleled care. Choose Apex Grooming Co. for a superior grooming journey where every detail matters."
      tag="Services & Benefits"
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "1",
          brand: "Apex Grooming Co.",
          name: "Classic Fade",
          price: "From $45",
          rating: 5,
          reviewCount: "20",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-before-after-surgery_23-2149947581.jpg",
          imageAlt: "Before and after image of a man's classic fade haircut",
        },
        {
          id: "2",
          brand: "Apex Grooming Co.",
          name: "Sharp Beard Line",
          price: "From $30",
          rating: 5,
          reviewCount: "15",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-men-with-beards-posing_23-2149615795.jpg",
          imageAlt: "Before and after image of a man's sharp beard line trim",
        },
        {
          id: "3",
          brand: "Apex Grooming Co.",
          name: "Textured Crop",
          price: "From $50",
          rating: 5,
          reviewCount: "18",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-checkered-suit-posing-near-dark-blue-wall-street-background_158538-4214.jpg",
          imageAlt: "Stylish textured crop haircut for men",
        },
        {
          id: "4",
          brand: "Apex Grooming Co.",
          name: "Slick Back Elegance",
          price: "From $55",
          rating: 5,
          reviewCount: "12",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-serious-groom_1153-295.jpg",
          imageAlt: "Man with elegant slick back hairstyle",
        },
        {
          id: "5",
          brand: "Apex Grooming Co.",
          name: "Vintage Pompadour",
          price: "From $60",
          rating: 5,
          reviewCount: "10",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-gray-checkered-suit_158538-4205.jpg",
          imageAlt: "Man with classic vintage pompadour hairstyle",
        },
        {
          id: "6",
          brand: "Apex Grooming Co.",
          name: "Barber Shop Interior",
          price: "Experience",
          rating: 5,
          reviewCount: "25",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-bearded-man-barbershop-barber-work_627829-7242.jpg",
          imageAlt: "Luxurious barber shop interior",
        },
      ]}
      title="Masterful Transformations"
      description="Witness the skill and artistry of our barbers. Explore our gallery of precision cuts, expert beard trims, and complete style overhauls."
      tag="Our Work"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="buttons"
      testimonials={[
        {
          id: "1",
          name: "Marcus A.",
          role: "Entrepreneur",
          company: "Tech Innovate",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-looking-away-barber-shop_23-2148353460.jpg",
          imageAlt: "Portrait of Marcus A.",
        },
        {
          id: "2",
          name: "David R.",
          role: "Creative Director",
          company: "Design Hub",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/teenager-girl-combs-her-hair-looking-mirror-bathroom_169016-57398.jpg",
          imageAlt: "Portrait of David R.",
        },
        {
          id: "3",
          name: "Sophia L.",
          role: "Fashion Stylist",
          company: "Style Forward",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/rebel-man-plaid-shirt-posing_171337-19928.jpg",
          imageAlt: "Portrait of Sophia L.",
        },
        {
          id: "4",
          name: "Jonathan K.",
          role: "Legal Consultant",
          company: "Global Law Group",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-hairstilyst-giving-haircut_23-2148506285.jpg",
          imageAlt: "Portrait of Jonathan K.",
        },
        {
          id: "5",
          name: "Edward P.",
          role: "Brand Strategist",
          company: "Apex Marketing",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/deciding-shave_1098-14121.jpg",
          imageAlt: "Portrait of Edward P.",
        },
      ]}
      title="What Our Valued Clients Say"
      description="Hear directly from our community about their exceptional experiences and the unparalleled service at Apex Grooming Co."
      tag="Client Stories"
    />
  </div>

  <div id="booking" data-section="booking">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      text="Ready for an unparalleled grooming experience? Book your appointment today and discover the Apex difference. Our team is dedicated to providing you with the finest service in a luxurious setting. We look forward to welcoming you."
      buttons={[
        {
          text: "Book Your Appointment Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Apex Grooming Co."
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Barbers",
              href: "#services",
            },
            {
              label: "Gallery",
              href: "#gallery",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Haircuts",
              href: "#services",
            },
            {
              label: "Beard Trims",
              href: "#services",
            },
            {
              label: "Hot Shaves",
              href: "#services",
            },
            {
              label: "Grooming Packages",
              href: "#services",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Book Now",
              href: "#booking",
            },
            {
              label: "Contact",
              href: "#booking",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Apex Grooming Co. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
