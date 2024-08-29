import { Input, Section, Button } from '@telegram-apps/telegram-ui';
import './FormSection.module.css'; // Import the CSS file

export const InputSection = () => (
  <Section header="">
    <Input
      header="Describe Your Vision"
      placeholder="Share details about the image you want the AI to create..."
      className="mb-6 p-4 border border-gray-300 rounded-lg" // Increased bottom margin
    />
    <div>
      <Button size="l" stretched className="custom-button">
        Generate Image
      </Button>
    </div>
  </Section>
);
