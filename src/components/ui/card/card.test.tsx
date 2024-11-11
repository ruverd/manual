import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './card';

describe('Card Components', () => {
  it('should renders with default classes on Card', () => {
    render(<Card>Card Content</Card>);

    const card = screen.getByText('Card Content');

    expect(card).toBeInTheDocument();
    expect(card).toHaveClass(
      'rounded-xl border bg-card text-card-foreground shadow'
    );
  });

  it('should merges custom className with default classes on Card', () => {
    render(<Card className="custom-class">Card Content</Card>);

    const card = screen.getByText('Card Content');

    expect(card).toBeInTheDocument();
    expect(card).toHaveClass(
      'rounded-xl border bg-card text-card-foreground shadow custom-class'
    );
  });

  it('should renders with default classes on CardHeader', () => {
    render(<CardHeader>Header Content</CardHeader>);

    const header = screen.getByText('Header Content');

    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('flex flex-col space-y-1.5 p-6');
  });

  it('should renders with default classes on CardTitle', () => {
    render(<CardTitle>Title Content</CardTitle>);

    const title = screen.getByText('Title Content');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('font-semibold leading-none tracking-tight');
  });

  it('should renders with default classes on CardDescription', () => {
    render(<CardDescription>Description Content</CardDescription>);

    const description = screen.getByText('Description Content');

    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-sm text-muted-foreground');
  });

  it('should renders with default classes on CardContent', () => {
    render(<CardContent>Content</CardContent>);

    const content = screen.getByText('Content');

    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('p-6 pt-0');
  });

  it('should renders with default classes on CardFooter', () => {
    render(<CardFooter>Footer Content</CardFooter>);

    const footer = screen.getByText('Footer Content');

    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('flex items-center p-6 pt-0');
  });

  it('should renders a complete card with all components', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Description')).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
    expect(screen.getByText('Card Footer')).toBeInTheDocument();
  });
});
