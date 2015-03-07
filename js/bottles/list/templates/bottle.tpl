<div class="panel-heading">
  <h3 class="panel-title"><%- title %></h3>
</div>
<div class="panel-image" style="background-image: url('<%- imageLink %>')"></div>
<div class="panel-body">
  <a role="button" class="btn <%- alcohol < 14 ? 'btn-success' : ( alcohol < 40 ? 'btn-warning' : 'btn-danger' ) %>" disabled><%- alcohol %> %</a>
  <a role="button" class="btn btn-default" disabled><%- volume %> ml</a>
  <a role="button" class="btn btn-default" disabled><%- type %></a>
  <a role="button" class="btn btn-default" disabled><%- nationality %></a>
  <a role="button" class="btn btn-default" disabled><%- displayDate(brewingDate) + ' ( ' + displayMoment(brewingDate) + ' )' %></a>
</div>
