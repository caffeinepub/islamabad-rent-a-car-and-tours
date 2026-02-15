import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

// Example query hook - not used in current implementation
// but kept for future backend integration
export function useGetBookings() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['bookings'],
    queryFn: async () => {
      if (!actor) return [];
      // Backend doesn't have a getBookings method yet
      return [];
    },
    enabled: !!actor && !isFetching,
  });
}
