import { ResponseDestinationData } from '@/pages/api/destination';

export interface DestinationContentProps {
  id: string;
  title: string;
  description: string;
  organizer: string;
  price: number;
  discountPrice: number;
  images: string[];
  duration: number;
  slug: string;
  isSmallCard?: boolean;
  isContentOnRight?: boolean;
};

export const getDestination = async () => {
  const result = await fetch('/api/destination');
  const data = await result.json() as ResponseDestinationData;
  const destionationContent = data.data?.map((item) => ({
    id: item.itinerary_id,
    title: item.itinerary_name,
    description: item.itinerary_short_description,
    organizer: item.partner_name,
    price: Number(item.related_variant.itinerary_variant_pub_price),
    discountPrice: Number(item.related_variant.itinerary_variant_disc_price),
    images: item.related_galleries.map((gallery) => gallery.src),
    duration: item.itinerary_day,
    slug: item.itinerary_slug
  } as DestinationContentProps));
  return destionationContent;
};