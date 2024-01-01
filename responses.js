function getBotResponse(input) {
   switch(input)
   {
        case 'hi':
        case 'hello':
        case 'Hello':
        case 'Hi': return "Welcome";
                    break;
        case 'what does SciAstra do':
        case 'What does SciAstra do':  return "We make students love science & prepare all 4 subjects- PCMB. You can crack IAT, NEST, JEE, NEET, Boards & so on.";
            break;
        case 'What are the courses provided': 
        case 'what are the courses provided': return "IAT 2024 Prep guide at Rs 1, CUET 2024, HOMI and many other, please go to courses tab on navbar to go though all the courses"
            break
        case 'what are your achievements':
        case 'What are your achievements': return "AIR 1 in IAT; AIR 7,10 in IACS; AIR 12 in NEST any many more"
            break
        case 'What are your research institutes':
        case 'what are your research institutes':return "IISC, IISER, NISER, ISI, CMI, IACS, CEBS."
            break
        case 'What is your mission':
        case 'what is your mission':return "Helps students who aspire to invent new vaccines or becoming astrophysicists."
            break
        case 'How do you help studnets to aspire their dreams':
        case 'How do you help studnets to aspire their dreams':return "We help them by providing free study material developed by our team and we also do provide free mock tests for students to practice."
            break
        case 'where is SciAstra located':
        case 'Where is SciAstra located': return "Bhubaneshwar, Odisha"
            break
        case 'what makes SciAstra stand out':
        case 'What makes SciAstra stand out': return "We provide whole guidance from zero to hero for any exam, you can visit our Web stories to know about it much better."
            break
        case 'Careers in SciAstra':
        case 'careers in SciAstra':return "SciAstra is a fast growing company and have great mentors. It helps students to get an paid internships and help them learn a lot, gives students great guidance too and based on performance we recruit"
            break
        case 'is SciAstra available for mobile devices':
        case 'Is SciAstra available for mobile devices':return "Yes,we provide our services for the students who are comfortable with mobiles. We are avaiable for both Android and Mac, just go to playstore or appstore and download to avail our services"
            break
        case 'thank you':
        case 'Thank you':
        case 'thank you so much':
        case 'Thank you so much':return "No worries, feel free to ask any queries about us anytime"
            break
        default: return "Sorry, please ask something else";
   }
}