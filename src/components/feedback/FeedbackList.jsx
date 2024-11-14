import { useState } from 'react';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableColumn, 
  TableRow, 
  TableCell,
  Input,
  Select,
  SelectItem,
  Button,
  Chip,
  Pagination,
  Card
} from "@nextui-org/react";
import { Search, Filter, Calendar, Eye } from 'lucide-react';
import { useFeedbackData } from '../../hooks/useFeedbackData';

const FeedbackList = ({ onSelectFeedback }) => {
  const { feedbackData, teams, projects } = useFeedbackData();
  const [selectedTeam, setSelectedTeam] = useState('all');
  const [selectedProject, setSelectedProject] = useState('all');
  const [selectedSentiment, setSelectedSentiment] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const getSentimentColor = (sentiment) => {
    switch(sentiment) {
      case 'positive':
        return 'success';
      case 'neutral':
        return 'warning';
      case 'negative':
        return 'danger';
      default:
        return 'default';
    }
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          placeholder="Search feedback..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          startContent={<Search className="text-gray-400" size={20} />}
          className="max-w-xs"
        />
        
        <Select
          placeholder="Select team"
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          startContent={<Filter className="text-gray-400" size={20} />}
          className="max-w-xs"
        >
          <SelectItem key="all" value="all">All Teams</SelectItem>
          {teams.map((team) => (
            <SelectItem key={team} value={team}>{team}</SelectItem>
          ))}
        </Select>

        <Select
          placeholder="Select project"
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          startContent={<Filter className="text-gray-400" size={20} />}
          className="max-w-xs"
        >
          <SelectItem key="all" value="all">All Projects</SelectItem>
          {projects.map((project) => (
            <SelectItem key={project} value={project}>{project}</SelectItem>
          ))}
        </Select>

        <Select
          placeholder="Select sentiment"
          value={selectedSentiment}
          onChange={(e) => setSelectedSentiment(e.target.value)}
          className="max-w-xs"
        >
          <SelectItem key="all" value="all">All Sentiments</SelectItem>
          <SelectItem key="positive" value="positive">Positive</SelectItem>
          <SelectItem key="neutral" value="neutral">Neutral</SelectItem>
          <SelectItem key="negative" value="negative">Negative</SelectItem>
        </Select>
      </div>

      <Table aria-label="Feedback list" className="mt-6">
        <TableHeader>
          <TableColumn>DATE</TableColumn>
          <TableColumn>TEAM</TableColumn>
          <TableColumn>PROJECT</TableColumn>
          <TableColumn>FEEDBACK</TableColumn>
          <TableColumn>SENTIMENT</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {feedbackData.recentFeedback?.map((feedback) => (
            <TableRow key={feedback.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
              <TableCell>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-400" />
                  {new Date().toLocaleDateString()}
                </div>
              </TableCell>
              <TableCell>{feedback.team}</TableCell>
              <TableCell>{feedback.project}</TableCell>
              <TableCell>
                <p className="max-w-md truncate">{feedback.text}</p>
              </TableCell>
              <TableCell>
                <Chip
                  color={getSentimentColor(feedback.sentiment)}
                  variant="flat"
                  size="sm"
                >
                  {feedback.sentiment}
                </Chip>
              </TableCell>
              <TableCell>
                <Chip
                  color={feedback.status === 'approved' ? 'success' : 
                         feedback.status === 'rejected' ? 'danger' : 'warning'}
                  variant="dot"
                  size="sm"
                >
                  {feedback.status || 'pending'}
                </Chip>
              </TableCell>
              <TableCell>
                <Button 
                  size="sm" 
                  color="primary" 
                  variant="light"
                  startContent={<Eye size={16} />}
                  onClick={() => onSelectFeedback(feedback)}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-center mt-6">
        <Pagination
          total={10}
          page={page}
          onChange={setPage}
          showControls
          color="secondary"
        />
      </div>
    </Card>
  );
};

export default FeedbackList;