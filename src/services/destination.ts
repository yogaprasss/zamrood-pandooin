interface DestionationDataProps {
  itinerary_id: string;
  itinerary_name: string;
  itinerary_day: number;
  itinerary_slug: string;
  partner_name: string;
  partner_alias: string;
  itinerary_location: string;
  itinerary_short_description: string;
  itinerary_long_description: string;
  morph_class: string;
  related_galleries: RelatedGallery[];
  related_variant: RelatedVariant;
}

interface RelatedGallery {
  itinerary_id: string;
  gallery_id: number;
  gallery_alt_text: string;
  gallery_path: string;
  src: string;
  title: string;
}

interface RelatedVariant {
  itinerary_id: string;
  itinerary_variant_id: number;
  itinerary_variant_pub_price: string;
  itinerary_variant_disc_price: string;
  unit_name: string;
  related_unit: null;
}

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
  const url = process.env.NEXT_PUBLIC_BASE_URL + 'itinerary?highlight=true';
  const result = await fetch(url);
  const data = (await result.json()).data as DestionationDataProps[];
  const destionationContent = data.map((item) => ({
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