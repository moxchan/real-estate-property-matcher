interface ListingPageParams {
  params: Promise<{ id: string }>;
}

const ListingPage = async ({ params }: ListingPageParams) => {
  const { id } = await params;

  return <div>{id}</div>;
};

export default ListingPage;
