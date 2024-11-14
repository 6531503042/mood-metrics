import { useState } from 'react';
import { 
  Card, 
  CardBody,
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
  Chip
} from "@nextui-org/react";
import { Plus, Save, Trash2, MoveUp, MoveDown } from 'lucide-react';

const FormEditor = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      type: 'text',
      question: 'What specific challenges or obstacles have you encountered?',
      required: true,
      category: 'challenges'
    },
    {
      id: 2,
      type: 'rating',
      question: 'How would you rate your overall experience?',
      required: true,
      category: 'satisfaction'
    }
  ]);

  const addQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      type: 'text',
      question: '',
      required: true,
      category: 'general'
    };
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const moveQuestion = (id, direction) => {
    const index = questions.findIndex(q => q.id === id);
    if (
      (direction === 'up' && index === 0) || 
      (direction === 'down' && index === questions.length - 1)
    ) return;

    const newQuestions = [...questions];
    const temp = newQuestions[index];
    newQuestions[index] = newQuestions[index + (direction === 'up' ? -1 : 1)];
    newQuestions[index + (direction === 'up' ? -1 : 1)] = temp;
    setQuestions(newQuestions);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">
          Feedback Form Editor
        </h2>
        <Button
          color="primary"
          startContent={<Save size={18} />}
        >
          Save Changes
        </Button>
      </div>

      <div className="space-y-4">
        {questions.map((question, index) => (
          <Card key={question.id} className="shadow-md">
            <CardBody className="space-y-4">
              <div className="flex items-center gap-4">
                <Chip size="sm" variant="flat" color="secondary">
                  Question {index + 1}
                </Chip>
                <div className="flex-grow" />
                <Button
                  isIconOnly
                  variant="light"
                  onClick={() => moveQuestion(question.id, 'up')}
                  disabled={index === 0}
                >
                  <MoveUp size={18} />
                </Button>
                <Button
                  isIconOnly
                  variant="light"
                  onClick={() => moveQuestion(question.id, 'down')}
                  disabled={index === questions.length - 1}
                >
                  <MoveDown size={18} />
                </Button>
                <Button
                  isIconOnly
                  color="danger"
                  variant="light"
                  onClick={() => removeQuestion(question.id)}
                >
                  <Trash2 size={18} />
                </Button>
              </div>

              <Input
                label="Question"
                value={question.question}
                className="max-w-full"
              />

              <div className="flex gap-4">
                <Select
                  label="Type"
                  value={question.type}
                  className="max-w-xs"
                >
                  <SelectItem key="text" value="text">Text</SelectItem>
                  <SelectItem key="rating" value="rating">Rating</SelectItem>
                  <SelectItem key="choice" value="choice">Multiple Choice</SelectItem>
                  <SelectItem key="scale" value="scale">Scale</SelectItem>
                </Select>

                <Select
                  label="Category"
                  value={question.category}
                  className="max-w-xs"
                >
                  <SelectItem key="general" value="general">General</SelectItem>
                  <SelectItem key="satisfaction" value="satisfaction">Satisfaction</SelectItem>
                  <SelectItem key="challenges" value="challenges">Challenges</SelectItem>
                  <SelectItem key="improvements" value="improvements">Improvements</SelectItem>
                </Select>
              </div>
            </CardBody>
          </Card>
        ))}

        <Button
          color="secondary"
          variant="flat"
          startContent={<Plus size={18} />}
          onClick={addQuestion}
          className="w-full"
        >
          Add New Question
        </Button>
      </div>
    </div>
  );
};

export default FormEditor;