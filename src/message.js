var create_message = function (text, type, title, source) {
  var message = {};
  message.text = text;
  message.notification = text;
  if (type === "webapp") {
    var content = {};
    content.type = type;
    content.title = title;
    content.description = "Provided by Community app's calendar service";
    content.source = source;
    content.provider_name = "Calendar Service";
    content.app_id = "4f252cd23c3e498cb333009e83577c31";
    
    var preview = {};
    preview.mime_type = "text/html";
    preview.source = source;
    preview.width = 100;
    preview.height = 100;

    content.previews = [preview];
    message.content = content;
  }
  return message;
};

exports.create_message = create_message;
