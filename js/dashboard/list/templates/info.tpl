<div class="panel-heading">
  <h3 class="panel-title"><%- title %>
    <a href="" class="pull-right js-edit">
      <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
    </a>
  </h3>
</div>
<div  class="panel-image">
  <img class="img-responsive js-image" src="<%- imageLink %>">
</div>
<div class="panel-body">
  <dl class="dl-horizontal">
    <dt>주류명</dt>
    <dd><%- title %></dd>
    <dt>알콜분</dt>
    <dd><%- alcohol %> %</dd>
    <dt>용량</dt>
    <dd><%- volume %> ml</dd>
    <dt>종류</dt>
    <dd><%- type %></dd>
    <dt>원산지</dt>
    <dd><%- nationality %></dd>
    <dt>양조일자</dt>
    <dd><%- displayDate(brewingDate) + ' ( ' + displayMoment(brewingDate) + ' )' %></dd>
    <dt>등록일자</dt>
    <dd><%- displayDate(stockDate) + ' ( ' + displayMoment(stockDate) + ' )' %></dd>
    <dt>상태</dt>
    <dd><%- displayState(state) %></dd>
    <dt>메모</dt>
    <dd><%- memo %></dd>
  </dl>
</div>
