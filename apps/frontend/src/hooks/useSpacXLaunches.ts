import { useQuery } from 'urql';

const GET_LAUNCHES = `
  query($limit: Int!) {
    launchesPast(limit: $limit) {
      mission_name
      details
      links {
        flickr_images
        article_link
      }
    }
  }
`;

interface ApiResponse {
    launchesPast: [
        {
            mission_name: string;
            details: string;
            links: {
                flickr_images: string[];
                article_link: string;
            };
        },
    ];
}

const useSpaceXLaunches = () => {
    const [result] = useQuery<ApiResponse>({
        query: GET_LAUNCHES,
        variables: { limit: 10 },
    });
    console.log(result);
    const filteredResult = result.data?.launchesPast.filter((item) => item.links.flickr_images[0]);
    return { data: filteredResult, error: result.error, loading: result.fetching };
};

export default useSpaceXLaunches;
