import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Linkedin,
  Github,
  Twitter,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../components/ui/alert";
import SEO from '@/components/SEO';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "contactmuhammadidrees@gmail.com",
    link: "mailto:contactmuhammadidrees@gmail.com"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "+92 123 456 7890",
    link: "tel:+921234567890"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    value: "Karachi, Pakistan",
    link: "https://maps.google.com/?q=Karachi,Pakistan"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    value: "Mon - Fri, 9:00 AM - 6:00 PM",
    link: null
  }
];

const socialLinks = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername"
  },
  {
    icon: <Github className="w-5 h-5" />,
    name: "GitHub",
    url: "https://github.com/yourusername"
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    name: "Twitter",
    url: "https://twitter.com/yourusername"
  }
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Me"
        description="Get in touch with me for any inquiries or project discussions."
        keywords={["contact", "hire", "freelance", "web development"]}
        type="website"
      />
      <Navbar />
      <main className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                        </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                        </label>
                      <Input
                        id="email"
                        name="email"
                          type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                    <Input
                        id="subject"
                        name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                    <Textarea
                        id="message"
                        name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                        required
                      className="min-h-[150px]"
                    />
                    </div>
                  {submitStatus && (
                    <Alert variant={submitStatus === "success" ? "default" : "destructive"}>
                      {submitStatus === "success" ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <AlertCircle className="h-4 w-4" />
                      )}
                      <AlertTitle>
                        {submitStatus === "success" ? "Success!" : "Error!"}
                      </AlertTitle>
                      <AlertDescription>
                        {submitStatus === "success"
                          ? "Your message has been sent successfully."
                          : "There was an error sending your message. Please try again."}
                      </AlertDescription>
                    </Alert>
                  )}
                  <Button 
                        type="submit"
                    className="w-full gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                      "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <Card>
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d66.82258865!3d24.925482450000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1625641573342!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                  className="rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
                </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
