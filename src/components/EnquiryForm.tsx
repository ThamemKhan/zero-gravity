// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { useToast } from "@/hooks/use-toast";

// const EnquiryForm = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     plan: "",
//     message: ""
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Simulate form submission
//     toast({
//       title: "Enquiry Submitted!",
//       description: "We'll get back to you within 24 hours.",
//     });

//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       plan: "",
//       message: ""
//     });
//   };

//   const handleInputChange = (field: string, value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   return (
//     <section id="enquire" className="py-20 bg-muted/30">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div>
//             <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
//               Ready to Start?
//             </h2>
//             <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
//               Take the first step towards your fitness transformation. 
//               Our team is ready to help you achieve your goals.
//             </p>
            
//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-gym-primary/20 rounded-full flex items-center justify-center">
//                   <span className="text-gym-primary font-bold">1</span>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-foreground">Submit Enquiry</h3>
//                   <p className="text-muted-foreground">Tell us about your fitness goals</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-gym-primary/20 rounded-full flex items-center justify-center">
//                   <span className="text-gym-primary font-bold">2</span>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-foreground">Personal Consultation</h3>
//                   <p className="text-muted-foreground">Free assessment and plan creation</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-gym-primary/20 rounded-full flex items-center justify-center">
//                   <span className="text-gym-primary font-bold">3</span>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-foreground">Start Training</h3>
//                   <p className="text-muted-foreground">Begin your zero gravity journey</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Form */}
//           <Card className="bg-card border-border/50 shadow-xl">
//             <CardHeader>
//               <CardTitle className="text-2xl text-center text-foreground">
//                 Get Started Today
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Full Name</Label>
//                   <Input
//                     id="name"
//                     value={formData.name}
//                     onChange={(e) => handleInputChange("name", e.target.value)}
//                     placeholder="Enter your full name"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email Address</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => handleInputChange("email", e.target.value)}
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="phone">Mobile Number</Label>
//                   <Input
//                     id="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={(e) => handleInputChange("phone", e.target.value)}
//                     placeholder="Enter your mobile number"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="plan">Interested Plan</Label>
//                   <Select onValueChange={(value) => handleInputChange("plan", value)}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select a membership plan" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="starter">1 Year - ₹16999</SelectItem>
//                       <SelectItem value="elite">6 Months - ₹10999</SelectItem>
//                       <SelectItem value="zero-gravity">3 Months - ₹7999</SelectItem>
//                       <SelectItem value="zero-gravity">1 Month - ₹3299</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="message">Message (Optional)</Label>
//                   <Textarea
//                     id="message"
//                     value={formData.message}
//                     onChange={(e) => handleInputChange("message", e.target.value)}
//                     placeholder="Tell us about your fitness goals..."
//                     rows={4}
//                   />
//                 </div>

//                 <Button type="submit" variant="gym" className="w-full" size="lg">
//                   Submit Enquiry
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EnquiryForm;





import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const EnquiryForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Google Form Endpoint
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSducRaShRcSHDzVDnwKA5pKAVnNGiNctpEq8NtjhoNNOl5zmw/formResponse";

    // Mapping your state to Google Form Entry IDs
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("entry.147717462", formData.name);    // Name
    formDataToSubmit.append("entry.1458896590", formData.email);  // Email
    formDataToSubmit.append("entry.1565154316", formData.phone);  // Phone
    formDataToSubmit.append("entry.1501905305", formData.plan);   // Plan
    formDataToSubmit.append("entry.1503706041", formData.message); // Message

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors", // Required to bypass CORS for Google Forms
        body: formDataToSubmit,
      });

      toast({
        title: "Enquiry Submitted!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        plan: "",
        message: ""
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="enquire" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Ready to Start?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Take the first step towards your fitness transformation. 
              Our team is ready to help you achieve your goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gym-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-gym-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Submit Enquiry</h3>
                  <p className="text-muted-foreground">Tell us about your fitness goals</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gym-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-gym-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Personal Consultation</h3>
                  <p className="text-muted-foreground">Free assessment and plan creation</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gym-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-gym-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Start Training</h3>
                  <p className="text-muted-foreground">Begin your zero gravity journey</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <Card className="bg-card border-border/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                Get Started Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="plan">Interested Plan</Label>
                  <Select 
                    value={formData.plan}
                    onValueChange={(value) => handleInputChange("plan", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a membership plan" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* Note: value must match your Google Form dropdown/radio options exactly */}
                      <SelectItem value="1 Year - ₹16999">1 Year - ₹16999</SelectItem>
                      <SelectItem value="6 Months - ₹10999">6 Months - ₹10999</SelectItem>
                      <SelectItem value="3 Months - ₹7999">3 Months - ₹7999</SelectItem>
                      <SelectItem value="1 Month - ₹3299">1 Month - ₹3299</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your fitness goals..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="gym" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;