<div class="modal-dialog modal-lg">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h4 class="modal-title">New Bottle</h4>
    </div>
    <div class="modal-body">

<form class="form-horizontal row">
<fieldset class="col-xs-12 col-sm-6">
  <div class="form-group">
    <label class="col-xs-3 control-label" for="bottle-title">주류명</label>
    <div class="col-xs-9">
      <input type="text" class="form-control" id="bottle-title" name="title" value="<%- title %>" placeholder="">
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-3 control-label" for="bottle-subTitle">서브타이틀</label>
    <div class="col-xs-9">
      <input type="text" class="form-control" id="bottle-subTitle" name="subTitle" value="<%- subTitle %>" placeholder="">
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-3 control-label" for="bottle-imageLink">이미지</label>
    <div class="col-xs-9">
      <input type="text" class="form-control" id="bottle-imageLink" name="imageLink" value="<%- imageLink %>" placeholder="http://">
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-3 control-label" for="bottle-alcohol">알콜분</label>
    <div class="col-xs-9">
      <div class="input-group">
        <span class="input-group-addon">%</span>
        <input type="text" class="form-control" id="bottle-alcohol" name="alcohol" value="<%- alcohol %>">
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-3 control-label" for="bottle-volume">용량</label>
    <div class="col-xs-9">
      <div class="input-group">
        <span class="input-group-addon">ml</span>
        <input type="text" class="form-control" id="bottle-volume" name="volume" value="<%- volume %>">
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-3 control-label" for="bottle-type">종류</label>
    <div class="col-xs-9">
      <select class="form-control" id="bottle-type" name="type" value="<%- type %>">
        <option value="기타"  <%- type == '기타'  ? 'selected' : '' %>>기타</option>
        <option value="탁주"  <%- type == '탁주'  ? 'selected' : '' %>>탁주</option>
        <option value="청주"  <%- type == '청주'  ? 'selected' : '' %>>청주</option>
        <option value="와인"  <%- type == '와인'  ? 'selected' : '' %>>와인</option>
        <option value="맥주"  <%- type == '맥주'  ? 'selected' : '' %>>맥주</option>
        <option value="소주"  <%- type == '소주'  ? 'selected' : '' %>>소주</option>
        <option value="브랜디" <%- type == '브랜디' ? 'selected' : '' %>>브랜디</option>
        <option value="진"    <%- type == '진'    ? 'selected' : '' %>>진</option>
        <option value="고량주" <%- type == '고량주' ? 'selected' : '' %>>고량주</option>
        <option value="위스키" <%- type == '위스키' ? 'selected' : '' %>>위스키</option>
        <option value="보드카" <%- type == '보드카' ? 'selected' : '' %>>보드카</option>
      </select>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-3 control-label" for="bottle-nationality">원산지</label>
    <div class="col-xs-9">
      <input type="text" class="form-control" id="bottle-nationality" name="nationality" value="<%- nationality %>">
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-3 control-label" for="bottle-brewingDate">양조일자</label>
    <div class="col-xs-9">
      <input type="date" class="form-control" id="bottle-brewingDate" name="brewingDate" value="<%- cutDisplayDate(brewingDate) %>">
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-3 control-label" for="bottle-state">상태</label>
    <div class="col-xs-9">
      <label class="radio-inline">
        <input type="radio" name="state" id="inlineRadio1" value="close" <%- state == 'close' ? 'checked' : '' %> > 밀봉
      </label>
      <label class="radio-inline">
        <input type="radio" name="state" id="inlineRadio2" value="open" <%- state == 'open' ? 'checked' : '' %>> 개봉
      </label>
      <label class="radio-inline">
        <input type="radio" name="state" id="inlineRadio3" value="empty" <%- state == 'empty' ? 'checked' : '' %>> 빈병
      </label>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-3 control-label" for="bottle-memo">메모</label>
    <div class="col-xs-9">
      <textarea class="form-control" rows="3" name="memo"><%- memo %></textarea>
    </div>
  </div>
</fieldset>
<fieldset class="col-xs-12 col-sm-6">
  <img class="img-responsive img-rounded js-image" src="/img/sample.jpg">
</fieldset>
</form>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary js-post">Post</button>
    </div>
  </div>
</div>