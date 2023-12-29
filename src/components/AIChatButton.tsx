import { useState } from "react";
import AIChatBox from "./AIChatBox";
import { Button } from "./ui/button";
import { Bot } from "lucide-react";

export default function AIChatButton() {
  const [chatBoxOpen, setChatboxOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setChatboxOpen(true)}>
        <Bot size={20} className="mr-2" />
        AI Chat
      </Button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatboxOpen(false)} />
    </>
  );
}
