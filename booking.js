// Simple localStorage-based booking storage (demo only)
function saveBooking(booking) {
  const bookings = JSON.parse(localStorage.getItem('ramjanaki-bookings') || '[]');
  bookings.push({
    ...booking,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('ramjanaki-bookings', JSON.stringify(bookings));
  console.log('Booking saved locally:', booking);
}