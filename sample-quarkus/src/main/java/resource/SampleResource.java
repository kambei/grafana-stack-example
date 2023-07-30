package resource;


import com.google.gson.Gson;
import jakarta.annotation.Resource;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;
import lombok.extern.slf4j.Slf4j;

import java.util.Map;

@Resource
@Path("/sample")
@Slf4j
public class SampleResource {

    @POST
    @Path("/test")
    public Response test(Map<String, Object> body) {

        Gson gson = new Gson();
        String json = gson.toJson(body);
        log.info("message: {}", json);
        return Response.ok().build();
    }
}
