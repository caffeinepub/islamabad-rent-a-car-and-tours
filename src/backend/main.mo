import Time "mo:core/Time";
import List "mo:core/List";

actor {
  let bookings = List.empty<Booking>();

  type Booking = {
    id : Nat;
    guestName : Text;
    roomType : Text;
    checkIn : Time.Time;
    checkOut : Time.Time;
    timestamp : Time.Time;
  };

  public shared ({ caller }) func createBooking(guestName : Text, roomType : Text, checkIn : Time.Time, checkOut : Time.Time) : async Nat {
    let now = Time.now();
    let id = bookings.size();
    let booking : Booking = {
      id;
      guestName;
      roomType;
      checkIn;
      checkOut;
      timestamp = now;
    };
    bookings.add(booking);
    id;
  };
};
