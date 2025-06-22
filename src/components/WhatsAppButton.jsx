const WhatsappButton = () => {
    const phoneNumber = "+919561349346"; // ✅ Replace with your number (include country code)
    const message = "नमस्कार! मला तुमच्याकडून मंडप सजावटीबद्दल माहिती हवी आहे."; // Pre-filled message
  
    return (
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-current"
          viewBox="0 0 32 32"
        >
          <path d="M19.11 17.55c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14s-.73.9-.9 1.08c-.16.18-.34.2-.62.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.44.12-.58.13-.13.28-.33.42-.5.14-.17.18-.29.28-.48.1-.2.05-.37-.02-.51-.07-.14-.64-1.56-.88-2.13-.23-.55-.47-.48-.64-.48-.16-.01-.35-.01-.54-.01s-.5.07-.76.37c-.26.3-1 1-1 2.42s1.02 2.8 1.17 3 .2.44.42.67c.22.23 1.85 2.81 4.5 3.94.63.27 1.12.43 1.5.56.63.2 1.2.17 1.65.1.5-.07 1.55-.63 1.77-1.24.22-.61.22-1.13.16-1.24-.06-.11-.25-.17-.53-.3zM16 3C9.37 3 4 8.37 4 15c0 2.64.96 5.06 2.56 6.96L6 29l7.21-1.88C14.12 27.7 15.05 28 16 28c6.63 0 12-5.37 12-12S22.63 3 16 3zM16 26c-.77 0-1.52-.13-2.23-.37l-.41-.14-4.27 1.11 1.14-4.17-.26-.43C8.62 20.1 8 17.63 8 15c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
        </svg>
        WhatsApp
      </a>
    );
  };
  
  export default WhatsappButton;
  