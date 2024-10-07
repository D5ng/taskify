import React from "react"

interface ErrorBoundaryProps {
  children: React.ReactNode
  onReset: () => void
  fallback: React.ComponentType<any>
}

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this)
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  resetErrorBoundary() {
    this.props.onReset()
    this.setState({
      hasError: false,
    })
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <this.props.fallback onRefetch={this.resetErrorBoundary} />
    }

    return this.props.children
  }
}
