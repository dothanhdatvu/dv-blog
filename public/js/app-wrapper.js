// public/js/app-wrapper.js
"use strict";
var App = React.createClass({
  componentWillReceiveProps(nextProps) {
    // if we changed routes...
    if (nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal) {
      // save the old children (just like animation)
      this.previousChildren = this.props.children
    }
  },
  componentDidMount: function() {
    $.ajax({
      url: '/api/checkauthentication',
      dataType: 'json',
      cache: false,
      success: function(authenticated) {
        if (authenticated) {
          localStorage.setItem('user', 'datvu');
        }
        else {
          localStorage.removeItem('user');
        }

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    var {location} = this.props;
    var isModal = (location.state && location.state.modal &&
      this.previousChildren);

    return (
      <div>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/todos">To-do List</Link>
          </nav>
        </header>
        <div id="content">
          {isModal ? this.previousChildren : this.props.children}
          {isModal && (
            <Modal isOpen={true} returnTo={location.state.returnTo}>
              {this.props.children}
            </Modal>
          )}
        </div>
        <footer>
        </footer>
      </div>
    );
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="todos" url="/api/todos" component={TodoBox} />
      <Route path="resume" url="/api/resume/" component={ResumePage} />
      <Route path="resume/qualification/add" url="/api/resume/qualification" component={QualificationForm} />
      <Route path="resume/qualification/edit/:id" url="/api/resume/qualification" component={QualificationForm} />
      <Route path="projects" url="/api/projects/" component={ProjectsPage} />
      <Route path="project/new" url="/api/projects/" component={ProjectFormPage} />
      <Route path="project/:project_id" url="/api/projects/" component={ProjectViewPage} />
      <Route path="project/:project_id/edit" url="/api/projects/" component={ProjectFormPage} />
    </Route>
  </Router>,
  document.getElementById('main')
);
