var ProjectViewPage = React.createClass({
  loadProject: function() {
    var projectID = this.props.params.project_id;

    $.ajax({
      url: this.props.route.url + projectID,
      dataType: 'json',
      cache: false,
      success: function(data) {
        // console.log(data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.route.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: '[]'};
  },
  componentDidMount: function() {
    this.loadProject();
  },
  render: function() {
    return (
      <div>
        <Project data={this.state.data} />
      </div>
    );
  }
});

var Project = React.createClass({
  render: function() {
    var id = this.props.data[0]._id;
    var title = this.props.data[0].title;
    var picSrc = '/uploads/projects/' + id + '/' + this.props.data[0].picture;
    var description = this.props.data[0].description;

    return (
      <div>
        <h1>{title}</h1>
        <p><img src={picSrc} /></p>
        <p>{description}</p>
      </div>
    )
  }
});