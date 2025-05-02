// src/components/ProductCard.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
  slug: string;
}

const ProductCard = ({ title, description, icon, slug }: ProductCardProps) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="aspect-square w-full bg-gray-100 rounded-lg flex items-center justify-center mb-4">
          <svg
            className="w-24 h-24 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d={icon}
            />
          </svg>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link to={`/contact?product=${slug}`} className="w-full">
          <Button className="w-full">Inquire Now</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;