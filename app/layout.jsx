import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse | Perfect  for property Rentals",
  description: "Find your dream Rental Property",
  keywords: ["Property", "Rentals", "LandMark"],
};
const MainLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
