import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface BookingFormData {
  name: string;
  phoneNumber: string;
  carSelection: string;
  rentalDuration: string;
  pickupLocation: string;
  message: string;
}

export function useCreateBooking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: BookingFormData) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }

      // Note: The current backend expects different parameters
      // This is a workaround until the backend is updated
      // We're using the existing createBooking method with adapted parameters
      const guestName = formData.name;
      const roomType = `${formData.carSelection} - ${formData.rentalDuration || 'Not specified'}`;
      const checkIn = BigInt(Date.now() * 1000000); // Current time in nanoseconds
      const checkOut = BigInt((Date.now() + 86400000) * 1000000); // 24 hours later

      const bookingId = await actor.createBooking(guestName, roomType, checkIn, checkOut);
      
      return {
        id: bookingId,
        ...formData,
      };
    },
    onSuccess: () => {
      // Invalidate and refetch bookings query
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
}
